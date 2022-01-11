package EMS.project.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EMS.project.springboot.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
