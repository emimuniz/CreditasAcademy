package com.emprestimo.emprestimo.controller

import com.emprestimo.emprestimo.CustomerRepository
import com.emprestimo.emprestimo.service.calc
import com.emprestimo.emprestimo.model.Customer
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.RuntimeException

@CrossOrigin
@RestController
@RequestMapping("/api/customer")
class CustomerController(val repository: CustomerRepository) {

    @GetMapping
    fun read() = ResponseEntity.ok(repository.findAll())

    @GetMapping("/{document}")
    fun readId(@PathVariable document: String) = ResponseEntity.ok(repository.findByDocument(document))

    @PostMapping
    fun add(@RequestBody customer: Customer): ResponseEntity<Customer> {
        var emprestimo =  calc(customer.valor)
        customer.valorfinal = emprestimo.emprestimoValorFinal()
        return ResponseEntity.ok(repository.save(customer))
    }

    @PutMapping("/{document}")
    fun update(@PathVariable document: String,  @RequestBody customer: Customer) : ResponseEntity<Customer>{
            val customerDBOptional = repository.findByDocument(document)
            var emprestimo =  calc(customer.valor)
            customer.valorfinal = emprestimo.emprestimoValorFinal()

            val toSave = customerDBOptional.orElseThrow { RuntimeException("Customer document $document not found!") }.copy(
                nomeCompleto = customer.nomeCompleto,  dataDeNascimento = customer.dataDeNascimento, cpf = customer.cpf,
                email = customer.email, rendaMensal = customer.rendaMensal, atividadeProfissional = customer.atividadeProfissional,
                objetivoEmprestimo = customer.objetivoEmprestimo, telefone = customer.telefone, cepImovel = customer.cepImovel,
                numeroImovel = customer.numeroImovel, complementoImovel = customer.complementoImovel, tipoImovel = customer.tipoImovel,
                quitadoImovel = customer.quitadoImovel, contemMatriculaImovel = customer.contemMatriculaImovel,
                valor = customer.valor, valorfinal =  emprestimo.emprestimoValorFinal(),
            )
            return ResponseEntity.ok(repository.save(toSave))
    }

    @DeleteMapping("/{document}")
    fun delete(@PathVariable document: String) = repository.findByDocument(document).ifPresent{ repository.delete(it)}
}