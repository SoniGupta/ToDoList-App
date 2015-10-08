package Myapp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class TestController {

    @RequestMapping(value = "/all", produces = {"application/json"})
    @ResponseBody
    public List<TodoEntity> display() {
        List<TodoEntity> todo;
        todo = todoDao.findAll();
        return todo;
    }

    @RequestMapping("/add")
    @ResponseBody
    public void create( String text,boolean done) {
        TodoEntity t = new TodoEntity(text,done);
        todoDao.save(t);
    }
    @RequestMapping("/delete")
    @ResponseBody
    public void deletedone() {

        todoDao.deletedone();

    }
@RequestMapping("/update")
@ResponseBody
public void check(boolean done,Integer id){
    todoDao.updatelist(done,id);

}

    @Autowired
    private TodoDao todoDao ;
}
