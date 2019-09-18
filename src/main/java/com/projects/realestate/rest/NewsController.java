package com.projects.realestate.rest;

import com.projects.realestate.bean.Request.CommentRequest;
import com.projects.realestate.bean.Request.LikeRequest;
import com.projects.realestate.bean.Request.NewsFilterSearch;
import com.projects.realestate.bean.Request.PostNewsRequest;
import com.projects.realestate.bean.Request.ShareRequest;
import com.projects.realestate.bean.Response.CommonResponse;
import com.projects.realestate.model.NewsItem;
import com.projects.realestate.service.UserService;
import com.projects.realestate.service.impl.NewsItemServiceImpl;
import com.projects.realestate.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/news")
public class NewsController {

    @Autowired
    NewsItemServiceImpl newsItemService;

    @Autowired
    UserServiceImpl userService;

    @GetMapping(value = "/all-news")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse getAllNewsItem() throws IOException {
        return newsItemService.getAllNewsItem();
    }

    @GetMapping(value = "/search-by-address")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse searchNewsByAddress(String address) throws Exception {
        return userService.searchNewsByAddress(address);
    }

    @PostMapping(value = "/search-by-user")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse searchNewsByUser(String username) throws Exception {
        return userService.searchNewsByUser(username);
    }

    @PostMapping(value = "/create-post")
    public ResponseEntity<?> createNewsPost(@RequestBody PostNewsRequest request) throws Exception {
        return new ResponseEntity<>(userService.createNewsPost(request), HttpStatus.OK);
    }

    @PostMapping(value = "/like")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse likeNewsFeed(@RequestBody LikeRequest like) throws Exception {
        return userService.likeNewsFeed(like);
    }

    @PostMapping(value = "/comment")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse commentNewsFeed(@RequestBody CommentRequest comment) throws Exception {
        return userService.commentNewsFeed(comment);
    }

    @PostMapping(value = "/share")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public CommonResponse shareNewsFeed(@RequestBody ShareRequest share) throws Exception {
        return userService.shareNewsFeed(share);
    }
}
