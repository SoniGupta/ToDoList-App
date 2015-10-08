package Myapp;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface TodoDao extends JpaRepository<TodoEntity, Integer> {


//    public TodoEntity findByEmail(String email);
//@Query("select u from User u where u.emailAddress = ?1")
    @Modifying
      @Query("update TodoEntity t set t.done=?1 where t.id=?2")
    public void updatelist(boolean done,Integer id);

    //@Query("UPDATE User u SET u.state = ?1 WHERE u.server.id = ?2")
    //public void updateAllUsers(long state, long serverid);


@Modifying
@Query("delete from TodoEntity t where t.done=true")
public void deletedone();



}
