package Controller;

import Dao.AdresDao;
import Dao.Tbl1Dao;
import Entiti.Adres;
import Entiti.Tbl1;
import javafx.application.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@SpringBootApplication
public class main {
    public static void main(String[] args) {
        SpringApplication.run(main.class, args);

        for (Tbl1 e : new Tbl1Dao().getAllTbl1()) {
            //System.out.println(e);
            System.out.println("###### id: " + e.getId() + ", Name: " + e.getOne() + ", Adress: " + e.getTwo() + " #####");
        }




    }
}
