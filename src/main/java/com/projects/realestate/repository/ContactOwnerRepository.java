package com.projects.realestate.repository;

import com.projects.realestate.model.ContactOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactOwnerRepository extends JpaRepository<ContactOwner, Long> {
    //
}
