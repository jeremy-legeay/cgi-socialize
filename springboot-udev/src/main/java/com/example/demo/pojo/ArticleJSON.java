package com.example.demo.pojo;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Data
public class ArticleJSON implements Serializable {

    // Serializable to avoid Cannot serialize redis ERROR !

    private Long id;
    @NotEmpty
    private String title;
    @NotEmpty
    private String image;
    @NotEmpty
    private String message;

    private UserJSON author;

}
