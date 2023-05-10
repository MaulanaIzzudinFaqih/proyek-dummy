import { HStack, VStack, Text, IconButton, Spacer, Checkbox, Badge } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"

export default function TodoList({todos, deleteTodo}) {

  //kemunculan bagde
  //fungsi munculin badge
  if (!todos.length) {
    return (
      <VStack 
        alignItems="center"
        >
        <Badge
          colorScheme="purple"
          padding={10}
          justifyContent="center"
          mt={5}
          borderRadius="10px"> 
          Kegiatanmu hari ini sudah selesai^^
        </Badge>
      </VStack>
    )
  }
  return (
    <VStack
      w="100%"
      minHeight="50vH"
      marginTop={3}>
			{todos.map((todo) => (
        <HStack key={todo.id}
          w="100%"
          bgColor="whiteAlpha.500"
          borderRadius="10px"
          >
          <Checkbox
            marginLeft={4}
            spacing={2}
            colorScheme="white"/>
					<Text
           marginLeft={4}
           textColor="white"
           fontSize="17px">{todo.body}</Text>
          {/* Spacer ngisi ruang kosong */}
          <Spacer/> 
					<IconButton 
           icon={<DeleteIcon/>}
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