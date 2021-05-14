package com.emprestimo.emprestimo.datasource

import com.emprestimo.emprestimo.model.Customer

interface CustomerDataSource {
    fun retrieveCustomer() : Collection<Customer>
}