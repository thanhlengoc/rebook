package com.projects.realestate.model;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(nullable = false, unique = true)
  private String name;

  @ManyToMany(mappedBy = "roles", cascade = CascadeType.ALL)
  private Set<User> users;

  public Role() {
  }

  public Role(String name) {
    this.name = name;
  }

  public int getId() { return id; }

  public void setId(int id) { this.id = id; }

  public String getName() { return name; }

  public void setName(String name) { this.name = name; }

  public Set<User> getUsers() { return users; }

  public void setUsers(Set<User> users) { this.users = users; }
}
