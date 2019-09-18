package com.projects.realestate.service;

import com.projects.realestate.bean.Response.CommonResponse;
import com.projects.realestate.model.NewsItem;
import org.springframework.data.domain.Page;

import java.io.IOException;

public interface NewsItemService {

    CommonResponse crawlerBatDongSan() throws IOException;

    CommonResponse crawlerDiaOcOnline() throws IOException;

    CommonResponse getAllNewsItem() throws IOException;

}
