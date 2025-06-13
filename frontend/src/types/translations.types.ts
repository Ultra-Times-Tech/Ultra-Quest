export type Language = 'fr' | 'en' | 'de'

export type TranslationKey = 
  | 'nav.home'
  | 'nav.quests'
  | 'nav.launchpad'
  | 'nav.ultraTimes'
  | 'nav.contact'
  | 'nav.admin'
  | 'wallet.connect'
  | 'wallet.connectShort'
  | 'wallet.connected'
  | 'wallet.disconnect'
  | 'wallet.copyAddress'
  | 'language.select'
  | 'language.en'
  | 'language.fr'
  | 'language.de'
  // Page d'accueil
  | 'home.title'
  | 'home.subtitle'
  | 'home.description'
  | 'home.exploreQuests'
  | 'home.featuredQuests'
  | 'home.allCategories'
  // Slider
  | 'slider.ultra.subtitle'
  | 'slider.ultra.description'
  | 'slider.ashes.subtitle'
  | 'slider.ashes.description'
  | 'slider.champion.subtitle'
  | 'slider.champion.description'
  // Catégories
  | 'category.ashes'
  | 'category.ultra'
  | 'category.social'
  | 'category.champion'
  | 'category.all'
  | 'category.browse'
  // Quêtes
  | 'quest.gems'
  | 'quest.lvlup'
  | 'quest.uniq'
  | 'quest.endsIn'
  | 'quest.completed'
  | 'quest.startQuest'
  | 'quest.viewDetails'
  | 'quest.difficulty'
  | 'quest.difficulty.easy'
  | 'quest.difficulty.medium'
  | 'quest.difficulty.hard'
  | 'quest.type.install'
  | 'quest.type.play'
  | 'quest.type.social'
  | 'quest.type.purchase'
  | 'quest.type.achievement'
  | 'quest.type.daily'
  | 'quest.type.weekly'
  | 'quest.type'
  | 'quest.by'
  | 'quest.rewards'
  | 'quest.requirements'
  | 'quest.progress'
  // Raretés des récompenses
  | 'quest.rarity.common'
  | 'quest.rarity.rare'
  | 'quest.rarity.epic'
  | 'quest.rarity.legendary'
  // Types de récompenses
  | 'quest.rewardType.nft'
  | 'quest.rewardType.skin'
  | 'quest.rewardType.item'
  | 'quest.rewardType.utility'
  // Descriptions de récompenses
  | 'reward.backpack'
  | 'reward.hairColourDust'
  | 'reward.utility'
  | 'reward.fullBodyArmorSet'
  | 'reward.essentialSurvivalTools'
  | 'reward.exclusiveAchievementNft'
  | 'reward.landDevelopmentTools'
  | 'reward.weatheredSurvivalGear'
  | 'reward.advancedCraftingTools'
  | 'reward.brotherhoodMembershipToken'
  | 'reward.proofOfHuntingMastery'
  | 'reward.exclusiveDigitalStrategyGuide'
  | 'reward.advancedBattleFormationPlans'
  | 'reward.crownOfTheUltimateChampion'
  | 'reward.medalForStrategicBrilliance'
  | 'reward.ultimateArenaVictoryTrophy'
  | 'reward.prestigiousBadgeForTacticalExcellence'
  | 'reward.contentCreationAssets'
  | 'reward.socialMediaMasteryToken'
  // Challenges spécifiques
  | 'challenge.daily.title'
  | 'challenge.daily.description'
  | 'challenge.weekly.title'
  | 'challenge.weekly.description'
  // Quêtes Ashes of Mankind
  | 'quest.ashes.1.title'
  | 'quest.ashes.1.subtitle'
  | 'quest.ashes.1.description'
  | 'quest.ashes.2.title'
  | 'quest.ashes.2.subtitle'
  | 'quest.ashes.2.description'
  | 'quest.ashes.3.title'
  | 'quest.ashes.3.subtitle'
  | 'quest.ashes.3.description'
  | 'quest.ashes.4.title'
  | 'quest.ashes.4.subtitle'
  | 'quest.ashes.4.description'
  | 'quest.ashes.5.title'
  | 'quest.ashes.5.subtitle'
  | 'quest.ashes.5.description'
  | 'quest.ashes.6.title'
  | 'quest.ashes.6.subtitle'
  | 'quest.ashes.6.description'
  | 'quest.ashes.7.title'
  | 'quest.ashes.7.subtitle'
  | 'quest.ashes.7.description'
  | 'quest.ashes.8.title'
  | 'quest.ashes.8.subtitle'
  | 'quest.ashes.8.description'
  // Quêtes Ultra
  | 'quest.ultra.1.title'
  | 'quest.ultra.1.subtitle'
  | 'quest.ultra.1.description'
  | 'quest.ultra.2.title'
  | 'quest.ultra.2.subtitle'
  | 'quest.ultra.2.description'
  | 'quest.ultra.3.title'
  | 'quest.ultra.3.subtitle'
  | 'quest.ultra.3.description'
  | 'quest.ultra.4.title'
  | 'quest.ultra.4.subtitle'
  | 'quest.ultra.4.description'
  | 'quest.ultra.5.title'
  | 'quest.ultra.5.subtitle'
  | 'quest.ultra.5.description'
  | 'quest.ultra.6.title'
  | 'quest.ultra.6.subtitle'
  | 'quest.ultra.6.description'
  // Quêtes Champion
  | 'quest.champion.1.title'
  | 'quest.champion.1.subtitle'
  | 'quest.champion.1.description'
  | 'quest.champion.2.title'
  | 'quest.champion.2.subtitle'
  | 'quest.champion.2.description'
  | 'quest.champion.3.title'
  | 'quest.champion.3.subtitle'
  | 'quest.champion.3.description'
  | 'quest.champion.4.title'
  | 'quest.champion.4.subtitle'
  | 'quest.champion.4.description'
  | 'quest.champion.5.title'
  | 'quest.champion.5.subtitle'
  | 'quest.champion.5.description'
  // Boutons et actions
  | 'button.back'
  | 'button.startQuest'
  | 'button.claimRewards'
  | 'button.createQuest'
  | 'button.duplicate'
| 'button.rename'
| 'button.edit'
  | 'button.delete'
  | 'button.viewDetails'
  | 'button.completeQuest'
  // Administration
  | 'admin.title'
  | 'admin.questManager'
  | 'admin.categoryManager'
  | 'admin.questEditor'
  | 'admin.categories'
  | 'admin.quests'
  | 'admin.searchQuests'
  | 'admin.byStatus'
  | 'admin.status.active'
  | 'admin.status.draft'
  | 'admin.status.pending'
  | 'admin.status.ended'
  | 'admin.noQuestsFound'
  | 'admin.noQuestsDescription'
  | 'admin.table.order'
  | 'admin.table.name'
  | 'admin.table.status'
  | 'admin.table.start'
  | 'admin.table.end'
  | 'admin.table.participation'
  | 'admin.table.actions'
  | 'admin.createNewCategory'
  | 'admin.moreActions'
  | 'admin.questInformation'
  | 'admin.tasks'
  | 'admin.rewards'
  | 'admin.newCategory'
  | 'admin.createNewQuestCategory'
  | 'admin.categoryDescription'
  | 'admin.categoryName'
  | 'admin.categoryNamePlaceholder'
  | 'admin.categoryImage'
  | 'admin.categoryLogo'
  | 'admin.uploadImage'
  | 'admin.recommendedImageSize'
  | 'admin.requirements'
  | 'admin.logoRequirement'
  | 'admin.leaveQuestEditor'
  | 'admin.renameQuest'
  | 'admin.newQuestName'
  | 'admin.enterNewName'
  | 'admin.quest'
  | 'admin.duplicateQuest'
  | 'admin.duplicateQuestDescription'
  | 'admin.newQuestTitle'
  | 'admin.duplicateSuccess'
  | 'admin.duplicateError'
  | 'admin.editQuest'
  | 'admin.createNewQuest'
  // Quest Editor
  | 'admin.questName'
  | 'admin.questNamePlaceholder'
  | 'admin.questTagline'
  | 'admin.questTaglinePlaceholder'
  | 'admin.questDescription'
  | 'admin.questDescriptionPlaceholder'
  | 'admin.questImage'
  | 'admin.changeImage'
  | 'admin.questDate'
  | 'admin.noEndDate'
  | 'admin.recurrence'
  | 'admin.once'
  | 'admin.daily'
  | 'admin.weekly'
  | 'admin.monthly'
  | 'admin.saveDraft'
  | 'admin.preview'
  | 'admin.next'
  | 'admin.publishQuest'
  // Tasks
  | 'admin.ultraActions'
  | 'admin.currentTasks'
  | 'admin.addNewTasks'
  | 'admin.ultraActivityTask'
  | 'admin.socialMediaTask'
  | 'admin.participationRequirements'
  | 'admin.participationRequirementsDesc'
  // Rewards
  | 'admin.currentRewards'
  | 'admin.addNewRewards'
  | 'admin.gems'
  | 'admin.gemsDescription'
  | 'admin.addGems'
  | 'admin.uniqRewards'
  | 'admin.addUniq'
  | 'admin.uniqDescription'
  | 'admin.currencyReward'
  // Social Task Modal
  | 'admin.newSocialMediaTask'
  | 'admin.addNewTask'
  | 'admin.taskType'
  | 'admin.platform'
  | 'admin.followAccount'
  | 'admin.likePost'
  | 'admin.retweetPost'
  | 'admin.commentPost'
  | 'admin.joinServer'
  | 'admin.subscribeChannel'
  | 'admin.loginStreak'
  // Specific tasks
  | 'admin.task.followUltraX'
  | 'admin.task.followUltraYoutube'
  | 'admin.task.loginStreak5Days'
  | 'admin.task.followUltraXDesc'
  | 'admin.task.followUltraYoutubeDesc'
  | 'admin.task.loginStreak5DaysDesc'
  | 'admin.task.postHype'
  | 'admin.task.postHypeDesc'
  | 'admin.task.tagFriends'
  | 'admin.task.tagFriendsDesc'
  | 'admin.task.commentPost'
  | 'admin.task.commentPostDesc'
  | 'admin.taskInformation'
  | 'admin.accountAddress'
  | 'admin.titleField'
  | 'admin.description'
  | 'admin.taskTitle'
  | 'admin.taskDescription'
  | 'admin.add'
  // Ultra Action Modal
  | 'admin.newUltraAction'
  | 'admin.actionType'
  | 'admin.actionInformation'
  // UNIQ Reward Modal
  | 'admin.newUniqReward'
  | 'admin.uniqInformation'
  | 'admin.rarity'
  | 'admin.common'
  | 'admin.rare'
  | 'admin.epic'
  | 'admin.legendary'
  | 'admin.gemsAmount'
  | 'admin.gemsRangeInfo'
  | 'admin.gemsInputHelp'
  // Ultra Action Modal
  | 'admin.chooseActionType'
  | 'admin.selectActionToConfig'
  | 'admin.gameActions'
  | 'admin.socialActions'
  | 'admin.platformActions'
  | 'admin.installGame'
  | 'admin.installGameTitle'
  | 'admin.installGameDesc'
  | 'admin.playGame'
  | 'admin.playGameTitle'
  | 'admin.playGameDesc'
  | 'admin.achieveLevel'
  | 'admin.achieveLevelTitle'
  | 'admin.achieveLevelDesc'
  | 'admin.unlockAchievement'
  | 'admin.unlockAchievementTitle'
  | 'admin.unlockAchievementDesc'
  | 'admin.joinCommunity'
  | 'admin.joinCommunityTitle'
  | 'admin.joinCommunityDesc'
  | 'admin.dailyLogin'
  | 'admin.dailyLoginTitle'
  | 'admin.dailyLoginDesc'
  | 'admin.selectGame'
  | 'admin.chooseGame'
  | 'admin.requiredPlaytime'
  | 'admin.requiredLevel'
  | 'admin.achievementId'
  | 'admin.achievementIdPlaceholder'
  | 'admin.requiredStreak'
  | 'admin.addAction'
  // UNIQ Modal
  | 'admin.createNewUniqReward'
  | 'admin.collection'
  | 'admin.collectionPlaceholder'
  | 'admin.imageUrl'
  | 'admin.imageUrlPlaceholder'
  | 'admin.editReward'
  | 'admin.editTask'
  | 'admin.editAction'
  // Rewards page
  | 'rewards.title'
  | 'rewards.noAdditionalRewards'
  // Image Upload
  | 'imageUpload.selectImage'
  | 'imageUpload.dragAndDrop'
  | 'imageUpload.dropHere'
  | 'imageUpload.orClickToSelect'
  | 'imageUpload.supportedFormats'
  | 'imageUpload.maxSize'
  | 'imageUpload.recommendedSize'
  | 'imageUpload.fileName'
  | 'imageUpload.uploading'
  | 'imageUpload.useImage'
  // Footer
  | 'footer.copyright'
  | 'footer.followX'
  | 'footer.followInstagram'
  | 'footer.subscribeYoutube'
  | 'footer.followTwitch'
  | 'footer.joinDiscord'
  // Page Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.sendMessage'
  | 'contact.fullName'
  | 'contact.email'
  | 'contact.subject'
  | 'contact.message'
  | 'contact.placeholderName'
  | 'contact.placeholderEmail'
  | 'contact.placeholderSubject'
  | 'contact.placeholderMessage'
  | 'contact.sendButton'
  | 'contact.info'
  | 'contact.phone'
  | 'contact.address'
  | 'contact.faq'
  | 'contact.faq1.question'
  | 'contact.faq1.answer'
  | 'contact.faq2.question'
  | 'contact.faq2.answer'
  | 'contact.faq3.question'
  | 'contact.faq3.answer'
  // Temps
  | 'time.days'
  | 'time.hours'
  | 'time.minutes'
  | 'time.seconds'
  // Actions
  | 'action.filter'
  | 'action.sort'
  | 'action.search'
  | 'action.reset'
  | 'action.apply'
  | 'action.cancel'
  | 'action.save'
  | 'action.edit'
  | 'action.delete'
  | 'action.create'
  // Messages
  | 'message.loading'
  | 'message.error'
  | 'message.success'
  | 'message.noResults'
  | 'message.comingSoon'
  // Page de détails des quêtes
  | 'questDetail.notFound'
  | 'questDetail.notFoundDescription'
  | 'questDetail.backToQuests'
  | 'questDetail.description'
  | 'questDetail.rewards'
  | 'questDetail.actions'
  | 'questDetail.completed'
  | 'questDetail.inProgress'
  | 'questDetail.inProgressDescription'
  | 'questDetail.category'
  | 'questDetail.timeRemaining'
  // Headers des pages de catégories
  | 'categoryPage.ashes.subtitle'
  | 'categoryPage.ultra.subtitle'
  | 'categoryPage.champion.subtitle' 