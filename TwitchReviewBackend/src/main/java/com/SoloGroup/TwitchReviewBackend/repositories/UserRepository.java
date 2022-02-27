package com.SoloGroup.TwitchReviewBackend.repositories;

import com.SoloGroup.TwitchReviewBackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAllByEmail (String email);
}