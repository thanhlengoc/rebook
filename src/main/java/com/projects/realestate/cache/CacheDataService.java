package com.projects.realestate.cache;

import com.projects.realestate.model.NewsItem;
import com.projects.realestate.repository.NewsItemRepository;
import com.projects.realestate.utils.DateTimeUtils;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Component;

@Component
public class CacheDataService {

  @Autowired
  NewsItemRepository newsItemRepository;

  @CacheEvict(value = "findAllNewsItem", allEntries = true)
  public List<NewsItem> findAllNewsItem() {
    return newsItemRepository.findAll();
  }

  @CacheEvict(value = "findNewsThreeDateBefore", allEntries = true)
  public List<NewsItem> findNewsThreeDateBefore() {
    long dateFrom = DateTimeUtils.getThreeDateBefore();
    long dateTo = DateTimeUtils.getCurrentDateMilisec();
    List<NewsItem> newsItemList = newsItemRepository.findAllByPostedDate(dateFrom, dateTo);
    return newsItemList;
  }
}
