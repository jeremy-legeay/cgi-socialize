package com.example.demo.pojo;

import lombok.Data;

import javax.persistence.*;

//see https://fxrobin.developpez.com/tutoriels/java/lombok-retour-experience/
@Data
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    @Column(length = 3000)
    private String message;
    private Long author;
}
