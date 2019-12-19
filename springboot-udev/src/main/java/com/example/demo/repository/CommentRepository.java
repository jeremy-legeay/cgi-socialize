package com.example.demo.repository;


import com.example.demo.pojo.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
    @Query("SELECT c FROM Comment c WHERE c.article=:article")
    List<Comment> findByArticle(Long article);
}
