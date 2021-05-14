package com.emprestimo.emprestimo.datasource.mock

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class MockCustomerDataSourceTest {

    private val mockDataSource = MockCustomerDataSource()

    @Test
    fun `should provide a collection of customer`(){
        val customer = mockDataSource.retrieveCustomer();

        assertThat(customer.size).isGreaterThanOrEqualTo(2)
    }

    @Test
    fun `should provide mock data`(){
        val customer = mockDataSource.retrieveCustomer();

        assertThat(customer).allMatch{ it.document.isNotBlank()}
        assertThat(customer).anyMatch{ it.document != ""}

    }

}