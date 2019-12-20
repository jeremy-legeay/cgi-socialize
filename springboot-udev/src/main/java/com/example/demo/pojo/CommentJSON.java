package com.example.demo.pojo;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Data
public class CommentJSON implements Serializable {
    private Long id;
    @NotEmpty
    private String message;
    private UserJSON author;
    private Long article;
}
