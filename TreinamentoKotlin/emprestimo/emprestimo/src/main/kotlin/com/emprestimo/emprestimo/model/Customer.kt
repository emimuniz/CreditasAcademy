package com.emprestimo.emprestimo.model

import org.springframework.data.annotation.Id

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Customer(
    @Id
    val id: String? = null,
    val document: String,
    val valor: Double,
    val nomeCompleto: String,
    val email: String,
    val dataDeNascimento: String,
    val rendaMensal: Double,
    val atividadeProfissional: String,
    val objetivoEmprestimo: String,
    val telefone: String,
    val cepImovel: String,
    val numeroImovel: Int,
    val complementoImovel: String = "",
    val tipoImovel: String,
    val quitadoImovel: Boolean,
    val contemMatriculaImovel: Boolean,
    val cpf: String,
    var valorfinal: MutableMap<Int, Double> = mutableMapOf()
) {


}