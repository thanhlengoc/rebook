package com.projects.realestate.cache;

import com.projects.realestate.model.NewsImageUrl;
import com.projects.realestate.model.NewsItem;
import com.projects.realestate.model.User;
import com.projects.realestate.repository.ImagesRepository;
import com.projects.realestate.repository.NewsItemRepository;
import com.projects.realestate.repository.UserRepository;
import com.projects.realestate.service.impl.NewsItemServiceImpl;
import com.projects.realestate.utils.DateTimeUtils;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@Transactional
public class NewsItemIndex {

  private Logger logger = LoggerFactory.getLogger(NewsItemServiceImpl.class);

  public static Map<String, NewsItem> newsItemMap = new HashMap<>();
  public static Map<Long, User> userMap = new HashMap<>();
  public static Map<Long, NewsImageUrl> imageUrlMap = new HashMap<>();

  @Autowired
  NewsItemRepository newsItemRepository;

  @Autowired
  UserRepository userRepository;

  @Autowired
  ImagesRepository imagesRepository;

  @Autowired
  CacheDataService cacheDataService;

  @PostConstruct
  public void mapToIndexNewsItem() {
    mapToIndexNews();
  }

  public void mapToIndexNews() {
    Long currentDateTimeMilisec = DateTimeUtils
        .convertTimeStampMilisecond(DateTimeUtils.getCurrentDate(), DateTimeUtils.DATE_TIME_FORMAT);
    logger.info("current dateTime milisec - {}", currentDateTimeMilisec);
    List<NewsItem> newsItemList = cacheDataService.findNewsThreeDateBefore();
    if (newsItemList != null && !newsItemList.isEmpty()) {
      logger.info("newsItemMap - {}", NewsItemIndex.newsItemMap);
      NewsItemIndex.newsItemMap.clear();
      for (int i = 0; i < newsItemList.size(); i++) {
        NewsItemIndex.newsItemMap.put(newsItemList.get(i).getUrl(), newsItemList.get(i));

//        User user = userRepository.findById(newsItemList.get(i).getUser().getId()).get();
//        NewsItemIndex.userMap.put(user.getId(), user);
      }
    }
  }

}
