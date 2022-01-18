package kashyap5551.springboot;

import kashyap5551.springboot.model.Employee;
import kashyap5551.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
}
