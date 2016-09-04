package net.viralpatel.spring.controller;

import java.util.List;








import net.viralpatel.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HelloController {
	
	@RequestMapping("/")
	
	public String hello(Model model) {

		model.addAttribute("name", "John Doe");

		return "taxi";
	}
@RequestMapping("/taxi")
	
	public String taxi1(Model model) {

		model.addAttribute("name", "John Doe");

		return "taxi";
	}
@RequestMapping("/registro")

public String taxi2(Model model) {

	model.addAttribute("name", "John Doe");

	return "denuncia";
}

	
@RequestMapping("/listas")
	
	public String hellod(Model model) {

		model.addAttribute("name", "John Doe");

		return "listas";
	}
}
