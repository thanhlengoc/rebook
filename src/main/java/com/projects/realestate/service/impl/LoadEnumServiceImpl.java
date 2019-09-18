package com.projects.realestate.service.impl;

import com.projects.realestate.enumeration.District;
import com.projects.realestate.enumeration.ForRentType;
import com.projects.realestate.enumeration.ForSaleType;
import com.projects.realestate.enumeration.ProvinceCity;
import com.projects.realestate.service.LoadEnumService;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class LoadEnumServiceImpl implements LoadEnumService {

  @Override
  public Map<Integer, String> loadProvinceEnum() {
    Map<Integer, String> map = ProvinceCity.toHashMap();
    return map;
  }

  @Override
  public Map<Integer, String> loadDistrict() {
    Map<Integer, String> map = District.toHashMap();
    return map;
  }

  @Override
  public Map<Integer, String> loadRentType() {
    return ForRentType.toHashMap();
  }

  @Override
  public Map<Integer, String> loadSaleType() {
    return ForSaleType.toHashMap();
  }
}
