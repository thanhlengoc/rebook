package com.projects.realestate.service;

import com.projects.realestate.bean.Request.CommentRequest;
import com.projects.realestate.bean.Request.LikeRequest;
import com.projects.realestate.bean.Request.PostNewsRequest;
import com.projects.realestate.bean.Request.ShareRequest;
import com.projects.realestate.bean.Response.CommonResponse;
import com.projects.realestate.model.User;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {

  CommonResponse createNewsPost(PostNewsRequest request) throws IOException;

  CommonResponse likeNewsFeed(LikeRequest request) throws IOException;

  CommonResponse commentNewsFeed(CommentRequest request) throws IOException;

  CommonResponse shareNewsFeed(ShareRequest request) throws IOException;

  CommonResponse searchNewsByUser(String username) throws IOException;

  CommonResponse searchNewsByAddress(String address) throws IOException;

}
