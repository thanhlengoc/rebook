package com.projects.realestate.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class NewsItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    private String title;
    private String url;
    private String summary;

    @OneToMany(mappedBy = "newsItem", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<NewsImageUrl> images;

    private String price;
    private String area;

    @Column(name = "posted_date")
    private String postedDate;
    private Long postedMilisec;
    private String trans_type;

//    @OneToOne(mappedBy = "newsItem", cascade = CascadeType.ALL)
//    @JsonIgnore
//    private NewsDetails newsDetails;

    private String description;
    private String city;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    @JsonIgnore
    private PropertyAddress propertyAddress;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    @JsonIgnore
    private PropertyProject propertyProject;

    private String direct_of_house;
    private String frontEnd;
    private String room_number;
    private String floor_number;
    private String toilet_number;
    private String balcony;
    private String wardin;
    private String interior;

    @Column(name = "pub_date")
    private String pubDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "contact_owner_id")
    @JsonIgnore
    private ContactOwner contactOwner;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getUrl() { return url; }

    public void setUrl(String url) { this.url = url; }

    public String getSummary() { return summary; }

    public void setSummary(String summary) { this.summary = summary; }

    public Set<NewsImageUrl> getImages() { return images; }

    public void setImages(Set<NewsImageUrl> images) { this.images = images; }

    public String getPrice() { return price; }

    public void setPrice(String price) { this.price = price; }

    public String getArea() { return area; }

    public void setArea(String area) { this.area = area; }

    public String getPostedDate() { return postedDate; }

    public void setPostedDate(String postedDate) { this.postedDate = postedDate; }

    public String getTrans_type() { return trans_type; }

    public void setTrans_type(String trans_type) { this.trans_type = trans_type; }

//    public NewsDetails getNewsDetails() { return newsDetails; }
//
//    public void setNewsDetails(NewsDetails newsDetails) { this.newsDetails = newsDetails; }

    public Long getPostedMilisec() { return postedMilisec; }

    public void setPostedMilisec(Long postedMilisec) { this.postedMilisec = postedMilisec; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    public PropertyAddress getPropertyAddress() { return propertyAddress; }

    public void setPropertyAddress(PropertyAddress propertyAddress) { this.propertyAddress = propertyAddress; }

    public PropertyProject getPropertyProject() { return propertyProject; }

    public void setPropertyProject(PropertyProject propertyProject) { this.propertyProject = propertyProject; }

    public String getDirect_of_house() { return direct_of_house; }

    public void setDirect_of_house(String direct_of_house) { this.direct_of_house = direct_of_house; }

    public String getFrontEnd() { return frontEnd; }

    public void setFrontEnd(String frontEnd) { this.frontEnd = frontEnd; }

    public String getRoom_number() { return room_number; }

    public void setRoom_number(String room_number) { this.room_number = room_number; }

    public String getFloor_number() { return floor_number; }

    public void setFloor_number(String floor_number) { this.floor_number = floor_number; }

    public String getToilet_number() { return toilet_number; }

    public void setToilet_number(String toilet_number) { this.toilet_number = toilet_number; }

    public String getBalcony() { return balcony; }

    public void setBalcony(String balcony) { this.balcony = balcony; }

    public String getWardin() { return wardin; }

    public void setWardin(String wardin) { this.wardin = wardin; }

    public String getInterior() { return interior; }

    public void setInterior(String interior) { this.interior = interior; }

    public String getPubDate() { return pubDate; }

    public void setPubDate(String pubDate) { this.pubDate = pubDate; }

    public ContactOwner getContactOwner() { return contactOwner; }

    public void setContactOwner(ContactOwner contactOwner) { this.contactOwner = contactOwner; }
}
