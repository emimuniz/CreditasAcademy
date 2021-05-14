package com.emprestimo.emprestimo.datasource.mock

import com.emprestimo.emprestimo.datasource.CustomerDataSource
import com.emprestimo.emprestimo.model.Customer
import org.springframework.stereotype.Repository

@Repository
class MockCustomerDataSource : CustomerDataSource{

    val customer = listOf(
        Customer("12u9129181289", "17281178218", 200.0, "Emillyn", "Silva",
            "24/10/1062", 20000.0, "CLT", "Dividas", "32432322",
        "121728172", 9, "alto", "APARTAMENTO",  true, true , "17281178218"),

        Customer("12u9129181289", "17281178218", 200.0, "Emillyn", "Silva",
            "24/10/1062", 20000.0, "CLT", "Dividas", "32432322",
            "121728172", 9, "alto", "APARTAMENTO",  true, true, "17281178218" ),
    )


    override fun retrieveCustomer(): Collection<Customer> = customer
}