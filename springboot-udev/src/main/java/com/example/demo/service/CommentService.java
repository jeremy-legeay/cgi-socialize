package com.example.demo.service;


import com.example.demo.helper.CommentMapper;
import com.example.demo.pojo.*;
import com.example.demo.repository.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class CommentService {

    @Resource
    private CommentRepository commentRepository;

    @Resource
    private CommentMapper commentMapper;

    public List<CommentJSON> getAllComment() {
        log.info("Called for getAllComment...");
        List<Comment> commentList = commentRepository.findAll();
        return commentMapper.mapTo(commentList);
    }


    public CommentJSON addComment(CommentJSON comment) {
        Comment a = commentRepository.save(commentMapper.mapTo(comment));
        return commentMapper.mapTo(a);
    }

    public List<CommentJSON> getByArticle(long idArticle) {
        List<Comment> articleList = commentRepository.findByArticle(idArticle);
        return commentMapper.mapTo(articleList);
    }

    // rechercher par id à la place
}


