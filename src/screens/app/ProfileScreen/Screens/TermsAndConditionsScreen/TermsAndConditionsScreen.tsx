import { Screen, Text, BodyBox, Box, Button, Checkbox } from '@components';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

export function TermsAndConditionsScreen() {
  const [accepted, setAccepted] = useState(false);
  return (
    <Screen canGoBack title="Termos e condições" icon="notification">
      <BodyBox flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt="s24">
            <Text preset="paragraphMedium" textAlign="justify">
              Est fugiat assumenda aut reprehenderit Lorem ipsum dolor sit amet.
              Et odio officia aut voluptate internos est omnis vitae ut
              architecto sunt non tenetur fuga ut provident vero. Quo aspernatur
              facere et consectetur ipsum et facere corrupti est asperiores
              facere. Est fugiat assumenda aut reprehenderit voluptatem sed. Ea
              voluptates omnis aut sequi sequi. Est dolore quae in aliquid
              ducimus et autem repellendus. Aut ipsum Quis qui porro quasi aut
              minus placeat! Sit consequatur neque ab vitae facere. Aut quidem
              accusantium nam alias autem eum officiis placeat et omnis autem id
              officiis perspiciatis qui corrupti officia eum aliquam provident.
              Eum voluptas error et optio dolorum cum molestiae nobis et odit
              molestiae quo magnam impedit sed fugiat nihil non nihil vitae. Aut
              fuga sequi eum voluptatibus provident. Eos consequuntur voluptas
              vel amet eaque aut dignissimos velit. Vel exercitationem quam vel
              eligendi rerum At harum obcaecati et nostrum beatae? Ea
              accusantium dolores qui rerum aliquam est perferendis mollitia et
              ipsum ipsa qui enim autem At corporis sunt. Aut odit quisquam est
              reprehenderit itaque aut accusantium dolor qui neque repellat.
            </Text>
          </Box>
        </ScrollView>
        <Box marginBottom="s32" marginTop="s16" gap="s16">
          <Checkbox
            checked={accepted}
            onChange={setAccepted}
            label="Aceito os termos e condições"
          />
          <Button
            title="Aceitar"
            onPress={() => {}}
            width="80%"
            alignSelf="center"
            disabled={!accepted}
          />
        </Box>
      </BodyBox>
    </Screen>
  );
}
