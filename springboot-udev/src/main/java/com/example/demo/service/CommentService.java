package com.example.demo.service;


import com.example.demo.helper.CommentMapper;
import com.example.demo.helper.UserMapper;
import com.example.demo.pojo.*;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class CommentService {

    @Resource
    private CommentRepository commentRepository;

    @Resource
    private UserRepository userRepository;

    @Resource
    private CommentMapper commentMapper;

    @Resource
    private UserMapper userMapper;

    public List<CommentJSON> getAllComment() {
        log.info("Called for getAllComment...");
        List<Comment> commentList = commentRepository.findAll();

        List<CommentJSON> commentJSONS = commentList.stream().map(c -> {
            User user = userRepository.getOne(c.getAuthor());
            UserJSON userJSON = userMapper.mapTo(user);
            CommentJSON commentJSON = commentMapper.mapTo(c);
            commentJSON.setAuthor(userJSON);
            return commentJSON;
        }).collect(Collectors.toList());

        return commentJSONS;
    }

    public CommentJSON addComment(CommentJSON comment) {
        Comment a = commentRepository.save(commentMapper.mapTo(comment));
        return commentMapper.mapTo(a);
    }

    public List<CommentJSON> getByArticle(Long idArticle) {
        log.info("Called for getByArticle ...");
//        List<Comment> commentList = commentRepository.findByArticle(idArticle);
//
//        List<CommentJSON> commentJSONS = commentList.stream().map(c -> {
//            User user = userRepository.getOne(c.getAuthor());
//            UserJSON userJSON = userMapper.mapTo(user);
//            CommentJSON commentJSON = commentMapper.mapTo(c);
//            commentJSON.setArticle(idArticle);
//            return commentJSON;
//        }).collect(Collectors.toList());
//
//        return commentJSONS;
        List<Comment> articleList = commentRepository.findByArticle(idArticle);
        return commentMapper.mapTo(articleList);
    }
    // rechercher par id à la place
}


