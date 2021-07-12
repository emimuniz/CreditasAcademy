package com.emprestimo.emprestimo.service

import java.math.BigDecimal
import java.math.RoundingMode
import kotlin.math.pow

class calc(var valor: Double) {

    private val taxas: MutableMap<Int, Double> = mutableMapOf(60 to 0.0075, 120 to 0.0085, 240 to 0.0095)

    fun emprestimoValorFinal() :  MutableMap<Int, Double>{
        this.taxas.forEach{ (months, taxa) -> taxas[months] = calculaJuros(taxa, months) }
        return taxas
    }

    fun calculaJuros(taxa: Double, months: Int) = calculaValorTotal((1 + taxa).pow(months))

    fun calculaValorTotal(juros: Double) : Double{
        val valorTotal = BigDecimal(this.valor).multiply(BigDecimal(juros))
        return valorTotal.setScale(2, RoundingMode.HALF_UP).toDouble()
    }

}