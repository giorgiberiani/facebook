
package com.example.chat.rabbitmq;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class RabbimqConfig {

	@Bean
	public FanoutExchange fanout() {
		return new FanoutExchange("tut.fanout");
	}

	private static class ReceiverConfig {

		@Bean
		public Queue autoDeleteQueue1() {
			return new AnonymousQueue();
		}


		@Bean
		public Binding binding1(FanoutExchange fanout, Queue autoDeleteQueue1) {
			return BindingBuilder.bind(autoDeleteQueue1).to(fanout);
		}


		@Bean
		public Receiver receiver() {
			return new Receiver();
		}

	}

//	@Bean
//	public Sender sender() {
//		return new Sender();
//	}

}
