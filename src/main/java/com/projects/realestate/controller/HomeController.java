package com.projects.realestate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@Controller
public class HomeController {

  @GetMapping(value = "/")
  public String initPage() { return "redirect:/index"; }

  @GetMapping("/index")
  public String index() { return "index"; }

  @GetMapping(value = "/403")
  public String accessDenied() { return "403"; }

  @GetMapping(value = "/home")
  public String home() { return "home"; }
}
