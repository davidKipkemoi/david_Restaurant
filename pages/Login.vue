
<template>
	<v-container fill-height fluid>
		<v-row justify="center">
			<v-col class="d-flex justify-center">
				<v-card elevation="7" min-width="300" width="1000" color="secondary">
					<v-toolbar color="red">
						<v-toolbar-title>Blitz Food-KE</v-toolbar-title>
						<v-spacer />
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field
								ref="username"
								v-model="username"
								:rules="[() => !!username || 'This field is required']"
								prepend-icon="mdi-account"
								label="Login"
								placeholder="David Kipkemoi"
								required
							/>
							<v-text-field
								ref="password"
								v-model="password"
								:rules="[() => !!password || 'This field is required']"
								:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
								:type="showPassword ? 'text' : 'password'"
								prepend-icon="mdi-lock"
								label="Password"
								placeholder="*********"
								counter
								required
								@keydown.enter="login"
								@click:append="showPassword = !showPassword"
							/>
						</v-form>
					</v-card-text>
					<v-divider class="mt-5" />
					<v-card-actions>
						<v-spacer />
						<v-btn align-center justify-center color="tertiary" nuxt to="Home"> Login </v-btn>
					</v-card-actions>
					<v-snackbar v-model="snackbar" :color="color" :top="true">
						{{ errorMessages }}
						<v-btn text @click="snackbar = false"> Close </v-btn>
					</v-snackbar>

				</v-card>

			</v-col>
      <v-card
    tile
    flat
    rounded="lg"
    class="pa-md-10 pa-5 text-center"
    color="surface"
  >
    <h2 class="text-md-h6 font-weight-bold">Karibu Blitz Chakula</h2>
    <p class="text-md-body-2 mt-5">Follow us On</p>
    <div class="text-center">
      <v-btn
        color="surface"
        class="mr-2"
        v-for="(b, i) in sm"
        :key="`sm${i}`"
        fab
        depressed
      >
        <v-icon>{{ b.icon }}</v-icon>
      </v-btn>
    </div>
    <br />
  </v-card>
		</v-row>

	</v-container>

</template>

<script>
	export default {
		name: 'Login',
		data: function () {
			return {
				username: 'blitz@chakula.com',
				password: 'blitzFood',
				errorMessages: 'Incorrect login info',
				snackbar: false, // this is the wrong pass notification
				color: 'general',
				showPassword: false,

        sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ]
			}
		},


		methods: {

		},

	}
</script>
