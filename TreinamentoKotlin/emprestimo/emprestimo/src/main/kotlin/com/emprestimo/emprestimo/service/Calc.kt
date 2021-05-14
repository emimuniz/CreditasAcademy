package com.emprestimo.emprestimo.service

import kotlin.math.pow

class calc(var valor: Double) {

    val taxas: MutableMap<Int, Double> = mutableMapOf(60 to 0.001, 120 to 0.0012, 240 to 0.0015 )
    var valorfinal: MutableMap<Int, Double> = mutableMapOf()

    fun emprestimoValorFinal() :  MutableMap<Int, Double>{
        this.taxas.forEach{months, taxa -> taxas.put(months, calculaJuros(taxa, months))}
        return taxas
    }

    fun calculaJuros(taxa: Double, months: Int) = calculaValorTotal((1 + taxa).pow(months))

    fun calculaValorTotal(juros: Double) = this.valor * juros

}