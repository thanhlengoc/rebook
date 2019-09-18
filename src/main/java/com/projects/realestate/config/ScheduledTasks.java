package com.projects.realestate.config;

import com.projects.realestate.bean.Response.CommonResponse;
import com.projects.realestate.service.impl.NewsItemServiceImpl;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

  private static final Logger logger = LoggerFactory.getLogger(ScheduledTasks.class);
  private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

  @Autowired
  NewsItemServiceImpl newsItemService;

  @Scheduled(fixedRate = 60000, initialDelay = 10000)
  public void scheduleTaskWithFixedRate() throws IOException {
    logger.info("Fixed Rate Task :: Execution Time - {}", dateTimeFormatter.format(LocalDateTime.now()));
    CommonResponse response = newsItemService.crawlerBatDongSan();
    int returnCode = response.getReturnCode();
    if (returnCode == 1) {
      logger.info("Crawler BatDongSan.com.vn response - {}", response.getResult());
    }
    else {
      logger.error("Crawler BatDongSan.com.vn response fail - {}", response.getReturnMessage());
    }
  }

  @Scheduled(fixedRate = 100000, initialDelay = 10000)
  public void scheduleCrawlerDiaOcOnline() throws IOException {
    logger.info("Fixed Rate DiaOcOnline :: Execution Time - {}", dateTimeFormatter.format(LocalDateTime.now()));
    CommonResponse response = newsItemService.crawlerDiaOcOnline();
    int returnCode = response.getReturnCode();
    if (returnCode == 1) {
      logger.info("Crawler DiaOcOnline.vn response - {}",response.getResult());
    }
    else {
      logger.error("Crawler DiaOcOnline.vn response fail - {}", response.getReturnMessage());
    }
  }

}
