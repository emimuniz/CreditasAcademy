package com.emprestimo.emprestimo.web.controller

import com.emprestimo.emprestimo.CustomerRepository
import com.emprestimo.emprestimo.service.calc
import com.emprestimo.emprestimo.model.Customer
import com.emprestimo.emprestimo.web.usecases.*
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import java.lang.RuntimeException
import java.util.*


@CrossOrigin
@RestController
@RequestMapping("/api/customer")
class CustomerController(private  val repository: CustomerRepository,
                         private val createCustomerUseCase: createCustomerUseCase,
                         private val updateCustomerUseCase: updateCustomerUseCase) {

    @GetMapping
    fun read() = ResponseEntity.ok(repository.findAll())

    @GetMapping("/{document}")
    private fun  getCustomerId(@PathVariable document: String) =  repository
        .findByDocument(document)
        .orElseThrow { throw ResponseStatusException(HttpStatus.NOT_FOUND) }
        .let { ResponseEntity(it, HttpStatus.OK) }

    @PostMapping
    fun createPerson(
         @RequestBody createCustomer: Customer
    ) : ResponseEntity<Customer> {
        val customer = createCustomerUseCase.perform(createCustomer)

        return ResponseEntity(customer, HttpStatus.OK)
    }


    @PutMapping("/{document}")
    fun updatePerson(
        @PathVariable document: String,
        @RequestBody customer: Customer
    ) : ResponseEntity<Customer> {
        val person = updateCustomerUseCase.perform(document, customer)

        return ResponseEntity(person, HttpStatus.OK)
    }




    @DeleteMapping("/{document}")
    fun delete(@PathVariable document: String) = repository.findByDocument(document).ifPresent{ repository.delete(it)}
}