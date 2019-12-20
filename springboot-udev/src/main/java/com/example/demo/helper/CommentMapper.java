package com.example.demo.helper;


import com.example.demo.pojo.Article;
import com.example.demo.pojo.Comment;
import com.example.demo.pojo.CommentJSON;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CommentMapper {

    public Comment mapTo(CommentJSON commentJSON) {
        Assert.notNull(commentJSON, "The commentJSON must not be null");
        Comment a = new Comment();
        // must not set id !
        a.setMessage(commentJSON.getMessage());
        a.setAuthor(commentJSON.getAuthor().getId());
        a.setArticle(commentJSON.getArticle());
        return a;
    }

    public CommentJSON mapTo(Comment comment) {
        Assert.notNull(comment, "The comment must not be null");
        CommentJSON aJSON = new CommentJSON();
        aJSON.setMessage(comment.getMessage());
        aJSON.setArticle(comment.getArticle());
        aJSON.setId(comment.getId());
        return aJSON;
    }

    public List<CommentJSON> mapTo(List<Comment> commentList) {
        Assert.notNull(commentList, "The commentList must not be null");
        return commentList.stream().map(this::mapTo).collect(Collectors.toList());
    }

}
