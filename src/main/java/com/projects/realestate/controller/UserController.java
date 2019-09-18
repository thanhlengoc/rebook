package com.projects.realestate.controller;

import com.projects.realestate.auth.CurrentUser;
import com.projects.realestate.auth.UserPrincipal;
import com.projects.realestate.bean.Response.UserResponse;
import com.projects.realestate.dto.UserResponseDTO;
import com.projects.realestate.exception.ResourceNotFoundException;
import com.projects.realestate.model.User;
import com.projects.realestate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/user/me")
  public UserResponseDTO getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
    UserResponseDTO userResponseDTO = new UserResponseDTO();
    User user = userRepository.findById(userPrincipal.getId())
        .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

    userResponseDTO.setUserId(user.getId());
    userResponseDTO.setName(user.getName());
    userResponseDTO.setEmail(user.getEmail());
    userResponseDTO.setImageUrl(user.getImageUrl());
    userResponseDTO.setPhone(user.getPhoneNumber());
    userResponseDTO.setBirthday(user.getGender());
    userResponseDTO.setGender(user.getGender());
    userResponseDTO.setRoles(user.getRoles());

    return userResponseDTO;
  }

  @GetMapping("/user/me-no-role")
  public UserResponse getUserWithoutRole(@CurrentUser UserPrincipal userPrincipal) {
    UserResponse userResponse = new UserResponse();
    User user = userRepository.findById(userPrincipal.getId())
        .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

    userResponse.setUserId(user.getId());
    userResponse.setName(user.getName());
    userResponse.setBirthDate(user.getBirthDate());
    userResponse.setImageUrl(user.getImageUrl());
    userResponse.setEmail(user.getEmail());
    userResponse.setPhone(user.getPhoneNumber());
    userResponse.setGender(user.getGender());

    return userResponse;
  }

  @GetMapping("/user/principal")
  public UserPrincipal getCurrentPrincipal(@CurrentUser UserPrincipal userPrincipal) {
    return userPrincipal;
  }
}
