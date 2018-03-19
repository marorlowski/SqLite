package Controller;

import Dao.AdresDao;
import Entiti.Adres;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdresController {

    @Autowired



    @RequestMapping(value="/adres", method = {RequestMethod.GET, RequestMethod.POST})
    public @ResponseBody List<Adres> getAdres(){

        List<Adres> adresList = new ArrayList<>();
        for (Adres e : new AdresDao().getAllAdres()) {
            System.out.println(e);
            adresList.add(e);
        }


        return adresList;
    }

    @RequestMapping(value = "/adresJson", method = RequestMethod.POST)
    public @ResponseBody List<Adres> getAdresJson (){
        List<Adres> adresList = new ArrayList<>();
        for (Adres e : new AdresDao().getAllAdres()) {
            System.out.println(e);
            adresList.add(e);
        }
        return adresList;
    }

    @RequestMapping(value = "/adresJsonPost", method = RequestMethod.POST)
    public @ResponseBody List<Adres> getAdresJson (@RequestBody List<Adres> jsonString){
        List<Adres> adresList = new ArrayList<>();
        for (Adres e : new AdresDao().getAllAdres()) {
            System.out.println(e);
            adresList.add(e);
        }
        return adresList;
    }
}
