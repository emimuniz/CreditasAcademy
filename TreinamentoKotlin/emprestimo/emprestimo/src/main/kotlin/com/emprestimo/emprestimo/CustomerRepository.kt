package com.emprestimo.emprestimo

import com.emprestimo.emprestimo.model.Customer
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CustomerRepository : MongoRepository<Customer, String> {
    fun findByDocument(document: String) : Optional<Customer>
}