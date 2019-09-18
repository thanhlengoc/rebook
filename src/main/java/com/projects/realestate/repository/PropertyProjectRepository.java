package com.projects.realestate.repository;

import com.projects.realestate.model.PropertyProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyProjectRepository extends JpaRepository<PropertyProject, Long> {
}
