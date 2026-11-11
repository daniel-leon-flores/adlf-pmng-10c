package utez.edu.mx.peopleback.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.peopleback.kernel.ApiResponse;

@RestController
@RequestMapping("/people")
@CrossOrigin("*")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("")
    public ResponseEntity<ApiResponse> getAll(){
        return personService.getPeople();
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse> createPerson(@RequestBody Person person){
        return personService.createPerson(person);
    }

}
