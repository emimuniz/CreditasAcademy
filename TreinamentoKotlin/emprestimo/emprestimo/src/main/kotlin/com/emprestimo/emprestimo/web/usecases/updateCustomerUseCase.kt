package com.emprestimo.emprestimo.web.usecases

import com.emprestimo.emprestimo.CustomerRepository
import com.emprestimo.emprestimo.model.Customer
import com.emprestimo.emprestimo.service.calc
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.server.ResponseStatusException

@Component
class updateCustomerUseCase {

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    fun perform(document: String, updateCustomer: Customer) : Customer {
        val customerEntity = customerRepository.findByDocument(document)
        if(!customerEntity.isPresent) throw ResponseStatusException(HttpStatus.NOT_FOUND)

        val customer = customerEntity.get()

        val updatedCustomer = updatePersonEntity(updateCustomer, customer)

        return customerRepository.save(updatedCustomer)
    }

    private fun updatePersonEntity(customer: Customer, customerEntity: Customer) :Customer {
        return customerEntity.copy(
            nomeCompleto = customer.nomeCompleto,
            dataDeNascimento = customer.dataDeNascimento,
            cpf = customer.cpf,
            email = customer.email,
            rendaMensal = customer.rendaMensal,
            atividadeProfissional = customer.atividadeProfissional,
            objetivoEmprestimo = customer.objetivoEmprestimo,
            telefone = customer.telefone,
            cepImovel = customer.cepImovel,
            numeroImovel = customer.numeroImovel,
            complementoImovel = customer.complementoImovel,
            tipoImovel = customer.tipoImovel,
            quitadoImovel = customer.quitadoImovel,
            contemMatriculaImovel = customer.contemMatriculaImovel,
            valor = customer.valor,
        )
    }
}