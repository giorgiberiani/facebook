/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.chat.rabbitmq;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;


@Service
public class  Receiver  {


	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;


	@RabbitListener(queues = "#{autoDeleteQueue1.name}")
	public void receive1(String in) throws InterruptedException {
		System.out.println("received from rabbit and send " + in);
		simpMessagingTemplate.convertAndSend("/chat",in);
	}


//	public void receive(String in, int receiver) throws InterruptedException {
//		StopWatch watch = new StopWatch();
//		watch.start();
//		System.out.println("instance " + receiver + " [x] Received '" + in + "'");
//		doWork(in);
//		watch.stop();
//		System.out.println("instance " + receiver + " [x] Done in " + watch.getTotalTimeSeconds() + "s");
//	}
//
//	private void doWork(String in) throws InterruptedException {
//		for (char ch : in.toCharArray()) {
//			if (ch == '.') {
//				Thread.sleep(1000);
//			}
//		}
//	}

}
