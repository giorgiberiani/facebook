package com.example.chat;


import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


@CrossOrigin(origins = "http://localhost:4200.", maxAge = 3600)
@Order(Ordered.HIGHEST_PRECEDENCE)
@RestController
@RequestMapping("/api")
public class Controller {


    @Autowired
    private HttpSession httpSession;

    @Autowired
    private FanoutExchange fanout;

    @Autowired
    private RabbitTemplate template;

    @RequestMapping(method = RequestMethod.POST, value="/check")
    public ResponseEntity checkUser(@RequestBody String user){

                httpSession.setAttribute("user",user);
                System.out.println( "user  "+user);
                return new ResponseEntity<>(HttpStatus.OK);

    }


    @RequestMapping(method = RequestMethod.POST, value = "send")
    public ResponseEntity sendMessage(@RequestBody String message){


          System.out.println("message   "+ message);
              template.convertAndSend(fanout.getName(), "",message);



        return new ResponseEntity<>(HttpStatus.OK);

    }






}


