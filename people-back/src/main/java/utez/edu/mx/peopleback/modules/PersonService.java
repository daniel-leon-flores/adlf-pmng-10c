package utez.edu.mx.peopleback.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import utez.edu.mx.peopleback.kernel.ApiResponse;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public ResponseEntity<ApiResponse> getPeople(){
        List<Person> person = personRepository.findAll();
        ApiResponse response = new ApiResponse("Personas obtenidas exitosamente", person, false, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }

    public ResponseEntity<ApiResponse> createPerson(Person person){
        Person personResponse = personRepository.save(person);
        ApiResponse response = new ApiResponse("Personas obtenidas exitosamente", personResponse, false, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }

}
