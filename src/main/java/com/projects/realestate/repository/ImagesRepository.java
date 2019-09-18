package com.projects.realestate.repository;

import com.projects.realestate.model.NewsImageUrl;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagesRepository extends JpaRepository<NewsImageUrl, Long> {

  @Query(value = "INSERT INTO `images`+?2 () values () ", nativeQuery = true)
  void saveAllByPartition(List<NewsImageUrl> newsImageUrlList, String partition);
}
