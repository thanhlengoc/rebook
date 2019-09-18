package com.projects.realestate.service;

import com.projects.realestate.enumeration.ProvinceCity;
import java.util.Map;

public interface LoadEnumService {

  Map<Integer, String> loadProvinceEnum();

  Map<Integer, String> loadDistrict();

  Map<Integer, String> loadRentType();

  Map<Integer, String> loadSaleType();

}
