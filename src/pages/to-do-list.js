import {
	Button,
	Flex,
	Heading,
	Text,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
	useToast,
} from "@chakra-ui/react";
import TodoList from "@/component/daftarlist";
import { useState } from "react";
import { nanoid } from "nanoid";
import Head from "next/head";

export default function TodoListPage() {
	// function buat submit todo
	function handleClick() {
		if (!input) {
			toast({
				title: "Isi Kegiatan Terlebih Dahulu",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
			return;
		}

		const todo = {
			id: nanoid(),
			body: input,
		};
		addTodo(todo);
		setInput("");
	}

	//function buat nambahin todo
	function addTodo(todo) {
		setTodos([...todos, todo]);
	}

	//function buat delete list
	function deleteTodo(id) {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(newTodos);
	}

	//const list
	const initialTodos = [
		{
			id: 1,
			body: "ambil roti",
		},
		{
			id: 2,
			body: "ambil loundry",
		},
	];

	//fungsi buat munculin notifikasi todo ditambahkan
	const toast = useToast();

	const [todos, setTodos] = useState(initialTodos);
	const [input, setInput] = useState("");

	return (
		<>
			<Head>
				<title>To Do List</title>
				<link rel="icon" href="/todolist.png" />
			</Head>
			<VStack height="auto" marginTop={10}>
				<Flex
					direction="column"
					background="purple.300"
					p={5}
					rounded={6}
					width="50%"
					height="auto"
					alignItems="center"
					borderRadius="10px">
					<Heading textColor="white"> To Do List</Heading>
					<Text fontSize="2xl" textColor="white">
						Ini Digunakan Untuk Rencana Kegiatan{" "}
					</Text>

					<InputGroup size="md" marginTop={2}>
						<Input
							variant="filled"
							pr="4.5"
							placeholder="Rencana Kegiatan Hari Ini"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<InputRightElement width="4.5rem">
							<Button
								h="1.75rem"
								size="md"
								marginRight={2}
								variant="solid"
								textColor="purple.700"
								onClick={() => handleClick()}
								type="submit">
								Submit
							</Button>
						</InputRightElement>
					</InputGroup>

					<TodoList todos={todos} deleteTodo={deleteTodo} />
				</Flex>
			</VStack>
		</>
	);
}
