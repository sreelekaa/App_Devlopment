package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Shipment {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "transport_id") // Ensure the column name matches the Transport table
    private Transport transport;

    private int numberOfContainers;
    private String customerName;
    private String paymentType;

    // Credit/Debit Card Details
    private String cardNumber;
    private String cardHolderName;
    private String cvv;

    // Net Banking Details
    private String accountNumber;
    private String ifsc;

    // UPI Payment
    private String upiId;

    // Constructors
    public Shipment() {}

    public Shipment(Transport transport, int numberOfContainers, String customerName, String paymentType,
                    String cardNumber, String cardHolderName, String cvv, 
                    String accountNumber, String ifsc, String upiId) {
        this.transport = transport;
        this.numberOfContainers = numberOfContainers;
        this.customerName = customerName;
        this.paymentType = paymentType;
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.cvv = cvv;
        this.accountNumber = accountNumber;
        this.ifsc = ifsc;
        this.upiId = upiId;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    public int getNumberOfContainers() {
        return numberOfContainers;
    }

    public void setNumberOfContainers(int numberOfContainers) {
        this.numberOfContainers = numberOfContainers;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getIfsc() {
        return ifsc;
    }

    public void setIfsc(String ifsc) {
        this.ifsc = ifsc;
    }

    public String getUpiId() {
        return upiId;
    }

    public void setUpiId(String upiId) {
        this.upiId = upiId;
    }
}
