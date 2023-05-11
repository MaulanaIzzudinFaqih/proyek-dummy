import {
	HStack,
	VStack,
	Text,
	IconButton,
	Spacer,
	Checkbox,
	Badge,
	Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function TodoList({ todos, deleteTodo, changeStatus }) {
	//kemunculan bagde
	if (!todos.length) {
		return (
			<>
        <VStack alignItems="center">
            <Badge
							colorScheme="purple"
							padding={10}
							justifyContent="center"
							mt={5}
							borderRadius="10px"
							fontSize="15px">
							Kegiatanmu hari ini sudah selesai^^
						</Badge>
					</VStack>
			</>
		);
	}
  
	return (
		<VStack w="100%" minHeight="50%" marginTop={3}>
			{todos.map((todo, index) => (
				<HStack key={todo.id} w="100%" bgColor="whiteAlpha.500" borderRadius="10px">
					<Checkbox 
           marginLeft={4} 
           spacing={2} 
           colorScheme="white" 
           isChecked={todo.isChecked} 
           onChange={(e) => changeStatus(index, e.target.checked)}/>
					<Text marginLeft={4} textColor="white" fontSize="17px">
						{todo.body}
					</Text>
					{/* Spacer ngisi ruang kosong */}
					<Spacer />
					<IconButton
						icon={<DeleteIcon />}
						borderRadius="10px"
						colorScheme="white"
						variant="solid"
						onClick={() => deleteTodo(todo.id)}
					/>
				</HStack>
			))}
		</VStack>
	);
}
