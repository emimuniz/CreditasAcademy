package com.emprestimo.emprestimo.web.usecases

import com.emprestimo.emprestimo.CustomerRepository
import com.emprestimo.emprestimo.model.Customer
import com.emprestimo.emprestimo.service.calc
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.server.ResponseStatusException

@Component
class createCustomerUseCase {

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    fun perform(createCustomer: Customer) : Customer {
        var emprestimo =  calc(createCustomer.valor)
        createCustomer.valorfinal = emprestimo.emprestimoValorFinal()
        val persistedCustomer = customerRepository.save(createCustomer)
        return persistedCustomer
    }
}