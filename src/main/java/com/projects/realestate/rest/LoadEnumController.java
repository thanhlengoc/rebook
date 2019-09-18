package com.projects.realestate.rest;

import com.projects.realestate.service.impl.LoadEnumServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/enumeration")
public class LoadEnumController {

  @Autowired
  LoadEnumServiceImpl loadEnumService;

  @GetMapping(value = "/province-city")
  public ResponseEntity<?> getProvinceEnum() {
    return new ResponseEntity<>(loadEnumService.loadProvinceEnum(), HttpStatus.OK);
  }

  @GetMapping(value = "/district")
  public ResponseEntity<?> getDistrictEnum() {
    return new ResponseEntity<>(loadEnumService.loadDistrict(), HttpStatus.OK);
  }

  @GetMapping(value = "/rent-type")
  public ResponseEntity<?> getForRentType() {
   return new ResponseEntity<>(loadEnumService.loadRentType(), HttpStatus.OK);
  }

  @GetMapping(value = "/sale-type")
  public ResponseEntity<?> getForSaleType() {
    return new ResponseEntity<>(loadEnumService.loadSaleType(), HttpStatus.OK);
  }
}
